class CreateRaces < ActiveRecord::Migration
  def change
    create_table :races do |t|
      t.integer :player1_id
      t.integer :player2_id
      t.integer :winner_id
      t.string :time
      t.string :url, uniqueness: true
    end
  end
end
