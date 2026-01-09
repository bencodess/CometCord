/*
 * CometCord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export const enum IpcEvents {
    INIT_FILE_WATCHERS = "CometCordInitFileWatchers",

    OPEN_QUICKCSS = "CometCordOpenQuickCss",
    GET_QUICK_CSS = "CometCordGetQuickCss",
    SET_QUICK_CSS = "CometCordSetQuickCss",
    QUICK_CSS_UPDATE = "CometCordQuickCssUpdate",

    GET_SETTINGS = "CometCordGetSettings",
    SET_SETTINGS = "CometCordSetSettings",

    GET_THEMES_LIST = "CometCordGetThemesList",
    GET_THEME_DATA = "CometCordGetThemeData",
    GET_THEME_SYSTEM_VALUES = "CometCordGetThemeSystemValues",
    THEME_UPDATE = "CometCordThemeUpdate",

    OPEN_EXTERNAL = "CometCordOpenExternal",
    OPEN_THEMES_FOLDER = "CometCordOpenThemesFolder",
    OPEN_SETTINGS_FOLDER = "CometCordOpenSettingsFolder",

    GET_UPDATES = "CometCordGetUpdates",
    GET_REPO = "CometCordGetRepo",
    UPDATE = "CometCordUpdate",
    BUILD = "CometCordBuild",

    OPEN_MONACO_EDITOR = "CometCordOpenMonacoEditor",
    GET_MONACO_THEME = "CometCordGetMonacoTheme",

    GET_PLUGIN_IPC_METHOD_MAP = "CometCordGetPluginIpcMethodMap",

    CSP_IS_DOMAIN_ALLOWED = "CometCordCspIsDomainAllowed",
    CSP_REMOVE_OVERRIDE = "CometCordCspRemoveOverride",
    CSP_REQUEST_ADD_OVERRIDE = "CometCordCspRequestAddOverride",

    GET_RENDERER_CSS = "CometCordGetRendererCss",
    RENDERER_CSS_UPDATE = "CometCordRendererCssUpdate",
    PRELOAD_GET_RENDERER_JS = "CometCordPreloadGetRendererJs",
}
