console.log('loading config')

////update here to amend the current year
var current_year_configured = "2023";

// $('.current_year_text')

// var year_array = ["2017", "2016", "2015", "2014"]
var year_array =[];
var sorted_year_Array;
d3.csv('data/data.csv', function(data){
  data.forEach(function(d){
    if(year_array.includes(d.Year) === false){
      year_array.push(d.Year)
    }
    sorted_year_Array = year_array.sort(function(a, b){
      return d3.ascending(parseFloat(a), parseFloat(b))
    })
  })
  sorted_year_Array.forEach(function(year, index){
    var this_button_id = "year_" +year
    $('#country_profile_buttons').append(
      '<button type="button" id = "'+this_button_id+'" class="btn btn-secondary year_switch">'+year+'</button>'
    )

    if(index === sorted_year_Array.length -1){
      $("#"+this_button_id).addClass('active')
    }
  })
})
