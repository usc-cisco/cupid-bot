import { Command } from '@sapphire/framework';
import { GifService } from '../services/gif.service';

export class ConfessCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'confess',
      aliases: ['confession'],
      description: 'Send an anonymous confession to a user!',
      cooldownDelay: 60_000, // 1 minute
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(
      (builder) =>
        builder
          .setName('confess')
          .setDescription('Send an anonymous confession to a user')
          .addUserOption((option) =>
            option
              .setName('user')
              .setDescription('The user to send the confession to')
              .setRequired(true)
          )
          .addStringOption((option) =>
            option
              .setName('message')
              .setDescription('The confession message to send')
              .setRequired(true)
          )
          .addStringOption((option) =>
            option
              .setName('from')
              .setDescription('Your sender alibi, defaults to "Anon"')
              .setRequired(false)
          )
          .addStringOption((option) =>
            option
              .setName('gif')
              .setDescription('The gif search query you want to show them')
              .setRequired(false)
          ),
      {
        idHints: ['1333067031938859039'],
      }
    );
  }

  public override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction
  ) {
    const user = interaction.options.getUser('user');
    const confessionMessage = interaction.options.getString('message');
    const gifTheme = interaction.options.getString('gif');
    const fromAlias = interaction.options.getString('from') ?? 'Anon';

    if (!user || !confessionMessage) {
      return interaction.reply({
        content: 'You must provide both a user and a confession message.',
        ephemeral: true,
      });
    }

    // Fetch a random gif if gif-theme is provided
    let gifUrl: string | null = null;
    if (gifTheme) {
      try {
        const gifs = await GifService.searchGifs(gifTheme, 5);
        if (gifs.length > 0) {
          const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
          gifUrl = randomGif;
        }
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    }

    const confessionTitles = [
      'Oh? A Confession?! 😲',
      'Someone has a secret to share... 🤫',
      'A little confession just for you... 💌',
      'What do we have here? A confession? 🤔',
      'A confession you might not expect... 😏',
      'Guess what? A confession! 💬',
      'Who’s ready for a confession? 🙋‍♂️🙋‍♀️',
      "Here's a confession from the heart... ❤️",
      'A secret is about to be revealed... 🔓',
      'A confession to make your day! 🌟',
    ];
    const RANDOM_CONFESSION_TITLE = confessionTitles.at(
      Math.floor(Math.random() * confessionTitles.length)
    );

    // Attempt to send the confession message and gif as a DM
    try {
      const confessionMessageWithGif = `## ${RANDOM_CONFESSION_TITLE}\n“${confessionMessage}”\n*— ${fromAlias}*${
        gifUrl ? `\n\n-# ${gifUrl}` : ''
      }`;

      await user.send(confessionMessageWithGif);

      await interaction.reply({
        content: `Your anonymous confession has been sent to ${user.tag}.`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Error sending confession:', error);
      await interaction.reply({
        content: `I couldn't send your confession to ${user.tag}. They might have DMs disabled.`,
        ephemeral: true,
      });
    }
  }
}
