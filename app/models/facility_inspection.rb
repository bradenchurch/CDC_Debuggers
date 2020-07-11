class FacilityInspection < ApplicationRecord
  belongs_to :facility_data
  belongs_to :facility_inspection
end
