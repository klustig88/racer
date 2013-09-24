get '/' do
  erb :index
end

get '/results/:url' do
  @race = Race.find_by_url(params[:url])
  erb :results
end



#######################################

post '/' do
  p params[:player1]
  @player1 = User.create(name: params[:player1])
  @player2 = User.create(name: params[:player2])
  
  erb :game
end

post '/winner' do
  p params[:winner_name]
  p player1= User.find_by_name(params[:player1]).id
  p player2= User.find_by_name(params[:player2]).id
  p winner = User.find_by_name(params[:winner_name]).id
  @race = Race.create(player1_id: player1, player2_id: player2, winner_id: winner, time: params[:time])
  url = @race.generate_url
  @race.update_attribute(:url, url)
  if request.xhr?
    redirect to "/results/#{url}"
  end
end
