class AddDefaultValueToChoice < ActiveRecord::Migration[7.0]
  change_column_default :choices, :is_correct, false
end
