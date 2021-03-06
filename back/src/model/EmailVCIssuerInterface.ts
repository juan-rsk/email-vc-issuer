import { Issuer } from 'did-jwt-vc'
import VerificationCodeChecker from './VerificationCodeChecker'
import PersonalSignRecoverer from './PersonalSignRecoverer'
import EmailVCIssuer from './EmailVCIssuer'
import IssuedEmailVC from './entities/issued-vc'
import { Connection } from 'typeorm'
import DidChallenge from './entities/did-code'

export type DecorateVerificationCode = (verificationCode: string) => string

export const INVALID_SIGNATURE_ERROR_MESSAGE = 'Invalid signature'

export default class {
  verificationCodeChecker: VerificationCodeChecker
  personalSignRecoverer: PersonalSignRecoverer
  emailVCIssuer: EmailVCIssuer
  decorateVerificationCode: DecorateVerificationCode
  lastEmailRequest: Map<string, string>

  constructor(issuer: Issuer, dbConnection: Connection, decorateVerificationCode: DecorateVerificationCode) {
    this.verificationCodeChecker = new VerificationCodeChecker(dbConnection.getRepository(DidChallenge))
    this.personalSignRecoverer = new PersonalSignRecoverer()
    this.emailVCIssuer = new EmailVCIssuer(issuer, dbConnection.getRepository(IssuedEmailVC))
    this.decorateVerificationCode = decorateVerificationCode
    this.lastEmailRequest = new Map()
  }

  requestVerificationFor(did: string, emailAddress: string) {
    this.lastEmailRequest.set(did, emailAddress)
    return this.verificationCodeChecker.generateCodeFor(did)
  }

  async verify(did: string, sig: string) {
    const verificationCode = await this.verificationCodeChecker.getCodeOf(did)
    const msg = this.decorateVerificationCode(verificationCode)
    const signer = this.personalSignRecoverer.recover(msg, sig)
    if (did.split(':').slice(-1)[0].toLowerCase() !== signer.toLowerCase()) throw new Error(INVALID_SIGNATURE_ERROR_MESSAGE)
    return this.emailVCIssuer.createVerifiableCredentialFor(did, this.lastEmailRequest.get(did)!)
  }
}
