# Adding a bundler

## Introduction
Bundler provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.
Bundler is an exit from dependency hell, and ensures that the gems you need are present in development, staging, and production.

## Methods
Getting started with bundler is easy!
source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~> 2.2.4'
gem 'rspec'
Install all of the required gems from your specified sources:
$ bundle install
$ git add Gemfile Gemfile.lock
Run an executable that comes with a gem in your bundle:
$ bundle exec rspec spec/models
Finally, if you want a way to get a shortcut to gems in your bundle:

$ bundle install --binstubs

$ bin/rspec spec/models

## Results
Hello

## Discussions
Hello

## Referencias
Hello

