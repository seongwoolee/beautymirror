/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: 'MMM-iFrame',
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["https://comic.naver.com/webtoon/weekday.nhn"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2000", // width of iframe
					height: "1800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		},
		{
			module: "MMM-EmbedYoutube1", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: "bottom_bar",	// This can be any of the regions.
			config: {
				// See 'Configuration options' in README.md for more information.
				video_id: "w3jLJU7DT5E",
				video_list: [
					"HluANRwPyNo", 
					"ldZsablWkjA"
				  ],
				loop: true
			}
		},
		{
			module: "MMM-EmbedYoutube2", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: "bottom_bar",	// This can be any of the regions.
			config: {
				// See 'Configuration options' in README.md for more information.
				video_id: "r6A7Fsci7Ds",
				video_list: [
					"HluANRwPyNo", 
					"ldZsablWkjA"
				  ],
				loop: true
			}
		},
		/*
		{
			module: 'MMM-SmartWebDisplay',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
				height:"600px", //hauteur du cadre en pixel ou %
				width:"80%", //largeur
						   updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
						NextURLInterval: 0.5, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
						displayStateInfos: false,	//to display if the module is on autoloop, or stop. 
						displayLastUpdate: true, //to display the last update of the URL
				displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
						url: ["https://www.youtube.com/embed/Qwc2Eq6YXTQ?autoplay=1"], //source of the URL to be displayed
						scrolling: "no" // allow scrolling or not. html 4 only
				}
		},
		*/
        {
            module: "MMM-Test",
            position: "top_left",
            config: {}
		},

/*
		{
			module: "MMM-Profile",
			position: "top_right",
			config: {
				// Transparency of the picture.
				opacity: 1.0,
				// Maximum width of the picture.
				maxWidth: "20%",
				// Maximum height of the picture.
				maxHeight: "20%",
				// Border-Radius of the picture.
				borderRadius: "50%",
				// The URL to the picture.
				url:false,
				// Add a profile name.
				yourName: "이성우님",
				// Add some random text to show.
				randomText: " 안녕하세요!",
				// Compliments
				compliments: {
								day_sunny: [
										"Today it is sunny, get out!"
								],
								snow: [
										"Today it gets snowy, dress well."
								],
								cloudy: [
										"Today it gets cloudy, okay to stay inside."
								],
								day_cloudy: [
										"Today it gets cloudy, okay to stay inside."
								],
								cloudy_windy: [
										"Today, there is a lot of wind, dress well, can get cold."
								],
								showers: [
										"Today its rain, remember umbrella."
								],
								rain: [
										"Today its rain, remember umbrella."
								],
								thunderstorm: [
										"Today its thunderstorm"
								],
								night_cloudy: [
										"Tonight it gets cold and cloudy."
								],
								night_clear: [
										"It is clear sky tonight"
								],
								night_showers: [
										"If you are going out tonight, bring an umbrella"
								],
								night_rain: [
										"If you are going out tonight, bring an umbrella"
								],
								night_thunderstorm: [
										"Tonight there will be a thunderstorm, take out power cords."
								],
								night_snow: [
										"메뉴를 선택해주세요"
								],
								night_alt_cloudy_windy: [
										"Varying weather."
								],
								fog: [
										"Poor visibility! Drive carefully."
								]
							}
					}
		},
		*/


        
        {
            module: "MMM-Modulebar1",
            position: "top_left", // This can be any of the regions.
            classes: "default everyone", // Optional
            config: {
				showBorder:false,
				direction:"column",
                   buttons: {
                    "1": {
	                  		module: "MMM-iFrame",
							img:"https://apprecs.org/gp/images/app-icons/300/ec/com.nhn.android.webtoon.jpg",
							width:"50",
							height:"50",
                          },
                     "2": {
	                  		module: "MMM-EmbedYoutube1",
							img:"https://cdn.pixabay.com/photo/2016/08/27/03/02/youtube-1623577_960_720.png",
							width:"50",
							height:"50",
						  },
					 "3": {
							module: "MMM-EmbedYoutube2",
						  img:"https://cdn.pixabay.com/photo/2016/08/27/03/02/youtube-1623577_960_720.png",
						  width:"50",
						  height:"50",
						},
                },

                // See 'Configuration options' for more information.
            }
        },
        
        {
            module: "MMM-Dynamic-Modules",
        },
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right"
		},
		/*
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		*/
		/*
		{
			module: "compliments",
			position: "lower_third"
		},
		*/
		/*
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from https://openweathermap.org/city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		*/
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		/*
		{
			module: "MMM-ImagesPhotos",
			position: "middle_center",
			config: {
				opacity: 0.9,
				animationSpeed: 500,
				updateInterval: 5000,
			}
		},
		*/
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
