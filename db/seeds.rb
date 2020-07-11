require Rails.root.join("data", "urls.rb")

#USERS (7)
User.create(email: "jacob@gmail.com", first_name: "jacob", last_name: "smythe", password: 'password', password_confirmation: 'password')
User.create(email: "careen@gmail.com", first_name: "careen",last_name: "gibler", password: 'password', password_confirmation: 'password')
User.create(email: "johnston@gmail.com", first_name: "johnston",last_name: "pip", password: 'password', password_confirmation: 'password')

#Facility Data

3.times do
  Facility_data.create(user_id: (rand(6)+1), patients: (rand(6)+1), covid_cases: (rand(6)+1))
end

#Facility Inspection

3.times do
  Facility_inspection.create(facility_data_id: (rand(6)+1), reviewer: Faker::TvShows::RickAndMorty.character, passing_grade: (rand(6)+1), inspector_report: (rand(6)+1))
end

#CDC Guidelines

3.times do
  Guidelines.create(user_id: (rand(6)+1), masks: 'T', inspections: 'F', date: Date.current)
end


puts "Data Seeded.."
puts "Emails: jacob@gmail.com, careen@gmail.com, johnston@gmail.com"