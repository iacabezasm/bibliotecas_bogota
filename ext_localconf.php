<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bibliotecas_bogota/Configuration/TSconfig/page.typoscript">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bibliotecas_bogota/Configuration/TSconfig/user.typoscript">');
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['bibliotecas'] = 'EXT:bibliotecas_bogota/Configuration/RTE/bibliotecasRTE.yaml';
