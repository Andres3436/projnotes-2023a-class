# Babel plugins

## Introduction
Babel's code transformations are enabled by applying plugins (or presets) to your configuration file.

## Methods
Plugin Ordering

Ordering matters for each visitor in the plugin.

This means if two transforms both visit the "Program" node, the transforms will run in either plugin or preset order.

Plugins run before Presets.

Plugin ordering is first to last.

Preset ordering is reversed (last to first).

For example:

babel.config.json
{

  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
  
}

## Results
babel.config.json

{

  "plugins": ["babel-plugin-myPlugin", "@babel/plugin-transform-runtime"]
  
}

## Discussions
If the plugin is on npm, you can pass in the name of the plugin and Babel will check that it's installed in node_modules. This is added to the plugins config option, which takes an array.

## References
1. https://babeljs.io/docs/plugins/
