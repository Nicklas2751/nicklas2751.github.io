Gem::Specification.new do |spec|
  spec.name          = "hero-timeline-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Nicklas Wiegandt"]
  spec.email         = ["nicklas@wiegandt.eu"]

  spec.summary       = "A hero timeline theme for Jekyll."
  spec.homepage      = "https://github.com/nicklas2751/nicklas2751.github.io"
  spec.license       = "MIT"

  spec.files         = Dir.glob("**/*").select { |f| File.file?(f) }

  spec.add_runtime_dependency "jekyll", ">= 3.9"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll-feed"
end

