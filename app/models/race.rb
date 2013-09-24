class Race < ActiveRecord::Base
  def generate_url
    o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
    key = (0...5).map{ o[rand(o.length)] }.join
  end
end
