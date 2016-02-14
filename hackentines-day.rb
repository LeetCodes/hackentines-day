require 'sinatra'


get '/' do
  greeting = "Happy Valentine's Day!"
  erb :index, :locals => {:greeting => greeting}
end

get '/:name' do
  name = params[:name] || "Nobody"
  greeting = "Happy Valentine's Day, #{name}!"
  erb :index, :locals => {:greeting => greeting}
end
