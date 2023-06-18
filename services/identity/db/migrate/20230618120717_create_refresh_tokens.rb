class CreateRefreshTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :refresh_tokens do |t|
      t.string :token
      t.boolean :is_blacklisted
      t.timestamps
    end
    add_reference :refresh_tokens, :users, foreign_key: true
  end
end
