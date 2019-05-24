exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisons")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisons").insert([
        {
          id: 1,
          prison_name: "USP Florence",
          location: "Fremont County, Colorado",
          username_id: 1
        },
        {
          id: 2,
          prison_name: "Jackson County Holding",
          location: "Jackson County, Mississippi",
          username_id: 1
        },
        {
          id: 3,
          prison_name: "Seattle Penitentiary",
          location: "King County, Washington",
          username_id: 2
        },
        {
          id: 4,
          prison_name: "Adams County Correctional Center",
          location: "Natchez, Mississippi",
          username_id: 3
        },
        {
          id: 5,
          prison_name: "Otero County Prison Facility",
          location: "Chaparral, New Mexico",
          username_id: 3
        },
        {
          id: 6,
          prison_name: "Reeves I & II Correctional Institution",
          location: "Pecos, Texas",
          username_id: 4
        },
        {
          id: 7,
          prison_name: "Big Spring Correctional Center",
          location: "Big Spring, Texas",
          username_id: 5
        },
        {
          id: 8,
          prison_name: "Great Plains Correctional Institution",
          location: "Hinton, Oklahoma",
          username_id: 5
        },
        {
          id: 9,
          prison_name: "Eden Detention Center",
          location: "Eden, Texas",
          username_id: 5
        },
        {
          id: 10,
          prison_name: "Taft Correctional Institution",
          location: "Taft, California",
          username_id: 6
        },
        {
          id: 11,
          prison_name: "McRae Correctional Institution",
          location: "McRae-Helena, Georgia",
          username_id: 7
        },
        {
          id: 12,
          prison_name: "Cibola County Correctional Center",
          location: "Milan, New Mexico",
          username_id: 7
        },
        {
          id: 13,
          prison_name: "Reeves III Correctional Institution",
          location: "Pecos, Texas",
          username_id: 8
        },
        {
          id: 14,
          prison_name: "Rivers Correctional Institution",
          location: "Winton, North Carolina",
          username_id: 9
        },
        {
          id: 15,
          prison_name: "Moshannon Valley Correctional Center",
          location: "Philipsburg, Centre County, Pennsylvania",
          username_id: 10
        },
        {
          id: 16,
          prison_name: "Giles W. Dalby Correctional Institution",
          location: "Post, Texas",
          username_id: 10
        },
        {
          id: 17,
          prison_name: "Leavenworth Federal Penitentiary",
          location: "Leavenworth, Kansas",
          username_id: 11
        },
        {
          id: 18,
          prison_name: "Polunsky",
          location: "Livingston, Texas",
          username_id: 12
        },
        {
          id: 19,
          prison_name: "United States Penitentiary Tucson",
          location: "Tucson, Arizona",
          username_id: 13
        },
        {
          id: 20,
          prison_name: "Idaho Correction Center",
          location: "Kuna, Idaho",
          username_id: 14
        },
        {
          id: 21,
          prison_name: "United States Penitentiary Marion",
          location: "Marion, Illinois",
          username_id: 14
        },
        {
          id: 22,
          prison_name: "Julia Tutwiler Prison",
          location: "Wetumpka, Alabama",
          username_id: 15
        },
        {
          id: 23,
          prison_name: "California State Prison, Corcoran",
          location: "Kings County, California",
          username_id: 16
        },
        {
          id: 24,
          prison_name: "Walnut Grove Youth Correctional Facility",
          location: "Leake County, Mississippi",
          username_id: 17
        },
        {
          id: 25,
          prison_name: "United States Penitentiary Lewisburg",
          location: "Lewisburg, Pennsylvania",
          username_id: 17
        },
        {
          id: 26,
          prison_name: "Wabash Valley Correctional Facility",
          location: "Sullivan County, Indiana",
          username_id: 18
        },
        {
          id: 27,
          prison_name: "United States Penitentiary Beaumont",
          location: "Jefferson County, Texas",
          username_id: 19
        },
        {
          id: 28,
          prison_name: "Holman Correctional Facility",
          location: "Escambia County, Alabama",
          username_id: 19
        },
        {
          id: 29,
          prison_name: "United States Penitentiary Atlanta",
          location: "Atlanta, Georgia",
          username_id: 20
        },
        {
          id: 30,
          prison_name: "Ely State Prison",
          location: "Ely, Nevada",
          username_id: 20
        },
        {
          id: 31,
          prison_name: "Pelican Bay State Prison",
          location: "Crescent City, California",
          username_id: 21
        },
        {
          id: 32,
          prison_name: "Attica Correctional Facility",
          location: "Attica, New York",
          username_id: 22
        },
        {
          id: 33,
          prison_name: "United States Penitentiary Pollock",
          location: "Grant Parish, Louisiana",
          username_id: 23
        },
        {
          id: 34,
          prison_name: "Seattle",
          location: "King",
          username_id: 23
        },
        {
          id: 35,
          prison_name:
            "Men’s Central Jail and Twin Towers Correctional Facility",
          location: "Los Angeles, California",
          username_id: 23
        },
        {
          id: 36,
          prison_name: "Sing Sing Correctional Facility",
          location: "Ossining, New York",
          username_id: 23
        },
        {
          id: 37,
          prison_name: "Folsom State Prison",
          location: "Folsom, California",
          username_id: 23
        },
        {
          id: 38,
          prison_name: "Alcatraz",
          location: "San Francisco, California",
          username_id: 24
        },
        {
          id: 39,
          prison_name: "Louisiana State Penitentiary",
          location: "Angola, Louisiana",
          username_id: 24
        },
        {
          id: 40,
          prison_name: "Rikers Island",
          location: "Queens, New York",
          username_id: 24
        },
        {
          id: 41,
          prison_name: "Orleans Parish Prison",
          location: "New Orleans, Louisiana",
          username_id: 25
        },
        {
          id: 42,
          prison_name: "Penitentiary of New Mexico",
          location: "Santa Fe, New Mexico",
          username_id: 26
        },
        {
          id: 43,
          prison_name: "ADX Florence Facility",
          location: "Florence, Colorado",
          username_id: 27
        },
        {
          id: 44,
          prison_name: "San Quentin State Prison",
          location: "San Rafael, California",
          username_id: 28
        },
        {
          id: 45,
          prison_name: "Federal Correctional Institution, Dublin",
          location: "Dublin, California",
          username_id: 29
        },
        {
          id: 46,
          prison_name: "FPC Pensacola",
          location: "Pensacola, Florida",
          username_id: 30
        }
      ]);
    });
};
