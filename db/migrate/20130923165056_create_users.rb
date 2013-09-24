class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, uniqueness: true
      t.timestamp
    end
  end
end
