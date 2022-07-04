class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.string :choice
      t.boolean :is_correct
      t.integer :word_id

      t.timestamps
    end
  end
end
