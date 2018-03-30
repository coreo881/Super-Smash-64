//===============ELEMENTS=====================
var charThumb = {
	props:['cdata'],
	template: `
		<div class="charThumbnail" @mouseover="showMe()" v-on:click="playSound()">
		</div>
	`,
	methods:{
		showMe(){
			console.log('Hello!!');
			$("#stage").attr('style', this.cdata.imageCSS);
		},
		playSound(){
			var audioPlayer = new Audio(this.cdata.announcerSound);
			audioPlayer.play();

		}
	}
}
//===============END ELEMENTS=================
//===============PATTERNS=====================
Vue.component('header-pattern', {
	data(){
		return {
			minuteCounter: 2	
		}
	},
	methods: {
		countDown: function(theCounter, amt){
			if(this[theCounter]<=0)
				this[theCounter]=0;
			else
				this[theCounter]-=amt
				
		},
		countUp: function(theCounter, amt){
			if(this[theCounter]>=99)
				this[theCounter]=99;
			else
				this[theCounter]+=amt
		}
	},
	template:`
		<div id="header_pattern">
			<div id="playerText">
				<h1>1PlayerGame</h1>
			</div>
			<div id="timeCounter">
				<button class="timeCounter__btn--sub" v-on:click="countDown('minuteCounter',1)"><img src="assets/icons/leftArrow.png" alt="left arrow" /></button>
				<h2>TIME: {{ minuteCounter }}</h2>
				<button class="timeCounter__btn--add" v-on:click="countUp('minuteCounter',1)"><img src="assets/icons/rightArrow.png" alt="right arrow" /></button>
			</div>
			<div id="backBtn">
				<a href="#" onclick="alert('Coming Soon!')"><img src="assets/icons/backBtn.png" alt="" /></a>
			</div>
		</div>
	`
})


Vue.component('char-holder', {
	components: {
		'char-thumb': charThumb
	},
	data(){
		return {
			characterData: [
				{
					key: "1",
					name: "Luigi",
					imageCSS: "background-image:url('assets/characterimages-luigi.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Luigi.wav"
				},
				{
					key: "2",
					name: "Mario",
					imageCSS: "background-image:url('assets/characterimages-mario.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Mario.wav"
				},
				{
					key: "3",
					name: "DK",
					imageCSS: "background-image:url('assets/characterimages-dk.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Donkey Kong.wav"
				},
				{
					key: "4",
					name: "Link",
					imageCSS: "background-image:url('assets/characterimages-link.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Link.wav"
				},
				{
					key: "5",
					name: "Samus",
					imageCSS: "background-image:url('assets/characterimages-samus.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Samus.wav"
				},
				{
					key: "6",
					name: "Captain Falcon",
					subName: "C.Falcon",
					imageCSS: "background-image:url('assets/characterimages-cfalcon.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - C Falcon.wav"
				},
				{
					key: "7",
					name: "Ness",
					imageCSS: "background-image:url('assets/characterimages-ness.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Ness.wav"
				},
				{
					key: "8",
					name: "Yoshi",
					imageCSS: "background-image:url('assets/characterimages-yoshi.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Yoshi.wav"
				},
				{
					key: "9",
					name: "Kirby",
					imageCSS: "background-image:url('assets/characterimages-kirby.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Kirby.wav"
				},
				{
					key: "10",
					name: "Fox",
					imageCSS: "background-image:url('assets/characterimages-fox.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Fox.wav"
				},
				{
					key: "11",
					name: "Pikachu",
					imageCSS: "background-image:url('assets/characterimages-pikachu.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Pikachu.wav"
				},
				{
					key: "12",
					name: "JigglyPuff",
					imageCSS: "background-image:url('assets/characterimages-jigglypuff.jpg')",
					stockIcon: "assets/",
					backgroundIcon: "assets/",
					announcerSound: "assets/sounds/Announcer - Jigglypuff (USA).wav"
				},
			]
		}
	},
	template: `
		<div id="charHolder_pattern">
			<char-thumb v-for='char in characterData' :cdata='char' :id='char.name' :style="char.imageCSS" :key='char.key'></char-thumb>
		</div>
	`
})

Vue.component('options', {
	template: `
		<div id="options_pattern">
			<div id="options_text">
				
			</div>
			<div id="options_sliders">
				
			</div>
			<div id="options_score">
				
			</div>
		</div>
	`
})

Vue.component('player-data', {
	template: `
		<div id="playerData">
			<div class="container">
				<div id="playerOne">
					<h1>1P</h1>
				</div>
				<div id="stage">
					
				</div>
			</div>
			<options></options>
		</div>
	`,

})



//===============END PATTERNS=====================



var myVue = new Vue({
	el: "#characterSelect",
	data: {
		chooseYourChar: "assets/sounds/Announcer - Choose Your Character.wav",
		bgMusic: "assets/music/05 - Character Select_long.mp3"
	},
	mounted(){
			this.$nextTick(function(){
			var choose = new Audio(this.chooseYourChar);
			var backgroundMusic = new Audio(this.bgMusic);

			choose.play();
			
			backgroundMusic.loop=true;
			// backgroundMusic.play();

			console.log(backgroundMusic);
		})
	}
});