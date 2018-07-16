
export const storage = {
  saveCity: function(city) {
    try {
      let cities = JSON.parse(localStorage.getItem('cities'));
      if (!cities) {
        cities = {};
      }
      cities[city.id] = city
      localStorage.setItem('cities', JSON.stringify(cities));
    } catch(e) {
      throw new Error('Local storage error') //ToDo: add details
    }
  },
  deleteCity: function(city) {
    try {
      let cities = JSON.parse(localStorage.getItem('cities'));
      if (!cities) {
        return
      }
      delete cities[city.id]
      localStorage.setItem('cities', JSON.stringify(cities));
    } catch(e) {
      throw new Error('Local storage error')
    }
  },
  getCitiesIds: function() {
    try {
      let cities = JSON.parse(localStorage.getItem('cities'));
      if (!cities) {
        return
      }
      return Object.keys(cities)
    } catch(e) {
      throw new Error('Local storage error')
    }
  },
}
