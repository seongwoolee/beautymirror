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
		//0
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


		//1   , 롤
		{
			module: "MMM-EmbedYoutube1", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: "bottom_bar",	// This can be any of the regions.
			config: {
				video_id: "x2Gszy9WUFU",
				loop: true
			}
		},


		//2    , 먹방
		{
			module: "MMM-EmbedYoutube2", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: "bottom_bar",	// This can be any of the regions.
			config: {
				video_id: "lOPi8DJD8j8",
				loop: true
			}
		},
	
	



                {
           		 module: "MMM-Modulebar1",
            		 position: "top_left", // This can be any of the regions.
          	         classes: "default everyone", // Optional
                                config: {
				showBorder:false,
				direction:"column",
                                buttons:  {
                                         "1": {
	                  		                module: "MMM-iFrame",
							img:"https://apprecs.org/gp/images/app-icons/300/ec/com.nhn.android.webtoon.jpg",
							width:"50",
							height:"50",
                                              },
					 "2": {
							module: "MMM-Modulebar",
						        img:"https://cdn.pixabay.com/photo/2016/08/27/03/02/youtube-1623577_960_720.png",
						        width:"50",
						        height:"50",
					      },
                                          },
                                        }
		},
	


     
          	//4
		{
                          module: "MMM-Modulebar",
                          position: "top_left", // This can be any of the regions.
          		  classes: "default everyone", // Optional
        		         config: {
				 showBorder:false,
				 direction:"column",
                                 buttons:  {
                                         "1": {
	                  				module: "MMM-EmbedYoutube1",  // 롤
							img:"https://yt3.ggpht.com/a-/AAuE7mBa_7tbni_hWFkd_rjonVxhuP5jdszHw5ZN1A=s900-mo-c-c0xffffffff-rj-k-no",
							width:"50",
							height:"50",
					      },

					 "2": {
							module: "MMM-EmbedYoutube2",  // 먹방
						        img:"http://mblogthumb4.phinf.naver.net/MjAxNzAxMTdfMTQy/MDAxNDg0NjMxMzkwODE5.CuY3PCiQL66H6KAog0TtFOFq5Wo8VZOC_9x9GJfDg_Ag.xGrlIHTm-Rn7-HpQk5y0pbSaFuPT73nNlqRYaEphkcwg.JPEG.ansrud0995/%ED%95%98%EC%A0%95%EC%9A%B0_%EB%A8%B9%EB%B0%A9.jpg?type=w800",
						        width:"50",
						 	height:"50",
					      },

                                         "3": {
	                  				module: "MMM-EmbedYoutube3", // 뉴스
							img:"https://st2.depositphotos.com/1032749/7526/v/950/depositphotos_75262099-stock-illustration-news-icon-illustration.jpg",
							width:"50",
							height:"50",
					      },                                       

					 "4": {
							module: "MMM-EmbedYoutube4",  // 축구
						        img:"https://www.play-together.at/wAssets/img/icons/weblication/wThumbnails/icon-ball28c8dbf6-85487b88@464w.png",
						        width:"50",
						 	height:"50",
					      },
                                           },
                                          }
                },
        

                    
                //5
                     {
	               module: "MMM-Globe",                 // photo
	               position: "center",
	               config: {
		                 style: 'geoColor',
		                 imageSize: 300,
		                 ownImagePath:'http://rammb.cira.colostate.edu/ramsdis/online/images/thumb/himawari-8/full_disk_ahi_natural_color.jpg',
		                 updateInterval: 10*60*1000
	                       }
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
