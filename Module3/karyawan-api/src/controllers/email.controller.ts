import { Request, Response } from "express";
import { EmailService } from "../services/email.service";

export class EmailController {
  private emailService: EmailService;
  constructor() {
    this.emailService = new EmailService();
  }

  public async blastEmail(req: Request, res: Response) {
    try {
      const { subject, message } = req.body;

      if (!subject || !message) {
        res.status(400).json({
          message: "invalid subject or message",
        });
      }

      const info = await this.emailService.sendBlastEmail({
        subject: subject,
        message: message,
      });

      res.status(200).json({
        message: "Email succsesfully sent",
        deatil: info,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error : Failed blast email",
        detail: error,
      });
    }
  }
}
