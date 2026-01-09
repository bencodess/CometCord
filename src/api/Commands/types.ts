/*
 * CometCord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Command } from "@CometCord/discord-types";
export { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "@CometCord/discord-types/enums";

export interface CometCordCommand extends Command {
    isCometCordCommand?: boolean;
}
