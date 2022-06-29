class CreateQuizLogs < ActiveRecord::Migration[7.0]
  def change
    create_table :quiz_logs do |t|
      t.integer :quiz_id
      t.integer :user_id

      t.timestamps
    end
  end
end
