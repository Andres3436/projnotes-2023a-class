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

Create a rubygem with Bundler

$ bundle gem my_gem

Creating gem 'my_gem'...

      create  my_gem/Gemfile
      
      create  my_gem/.gitignore
      
      create  my_gem/lib/my_gem.rb
      
      create  my_gem/lib/my_gem/version.rb
      
      create  my_gem/my_gem.gemspec
      
      create  my_gem/Rakefile
      
      create  my_gem/README.md
      
      create  my_gem/bin/console
      
      create  my_gem/bin/setup
      
      create  my_gem/CODE_OF_CONDUCT.md
      
      create  my_gem/LICENSE.txt
      
      create  my_gem/.travis.yml
      
      create  my_gem/test/test_helper.rb
      
      create  my_gem/test/my_gem_test.rb
      
Initializing git repo in ./my_gem

## Discussions
Bundler has a lot of contributors and users, and they all talk to each other quite a bit. If you have questions, try the IRC channel or mailing list. If you’re interested in contributing to the project (no programming skills needed), read the contributing guide or the development guide.

## References
1. https://bundler.io/guides/getting_started.html
