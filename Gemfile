# frozen_string_literal: true

source 'https://rubygems.org'

gem 'jekyll', '~> 3.7.4'

group :jekyll_plugins do
  gem 'github-pages'
end

install_if -> { RUBY_PLATFORM =~ %r{/mingw|mswin|java/} } do
  gem 'tzinfo', '~> 1.2'
  gem 'tzinfo-data'
end

gem 'wdm', '~> 0.1.0', install_if: Gem.win_platform?

