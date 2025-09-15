import { Telegraf } from "telegraf";

export class TelegramService {
  private bot?: Telegraf;
  private channelId: string;
  private enabled: boolean;

  constructor() {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    this.channelId = process.env.TELEGRAM_CHANNEL_ID || "";
    this.enabled = !!botToken;

    if (botToken) {
      this.bot = new Telegraf(botToken);
    }
  }

  async sendToChannel(text: string, imageUrl?: string): Promise<void> {
    if (!this.enabled || !this.bot) {
      console.log("Telegram not configured, skipping message:", text);
      return;
    }

    try {
      if (!this.channelId) {
        throw new Error("TELEGRAM_CHANNEL_ID is required");
      }

      if (imageUrl) {
        await this.bot.telegram.sendPhoto(this.channelId, imageUrl, {
          caption: text,
          parse_mode: "Markdown",
        });
      } else {
        await this.bot.telegram.sendMessage(this.channelId, text, {
          parse_mode: "Markdown",
        });
      }
    } catch (error) {
      throw new Error(`Failed to send to Telegram: ${error}`);
    }
  }

  async testConnection(): Promise<boolean> {
    if (!this.enabled || !this.bot) {
      return false;
    }

    try {
      const me = await this.bot.telegram.getMe();
      return !!me;
    } catch (error) {
      console.error("Telegram connection test failed:", error);
      return false;
    }
  }
}

export const telegramService = new TelegramService();
