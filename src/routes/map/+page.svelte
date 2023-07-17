<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let SESSION_ID = Math.floor(Math.random()*1000000)

	const dispatch = createEventDispatcher();
	let columns = [
	  {
		id: Math.floor(Math.random()*1000),
		title: 'The Boys',
		subtitle: 'What Heracles & Jang are doing'
	  }
	];

	onMount(() => {
	  document.getElementById('add_column').onclick = () => {
		columns = [
		  ...columns,
		  {
			id: Math.floor(Math.random()*1000),
			title: '',
			subtitle: ''
		  }
		];



	  };


		setInterval(()=>{

			for (let i=0; i<document.getElementsByTagName('textarea').length; i++){
				let area = document.getElementsByTagName('textarea')[i]

				area.oninput = () => {
					area.style.height = 0;
					area.style.height = area.scrollHeight + "px";

					console.log(area.style.height)

					console.log('yo')
				}

			}
			}, 2000
		)



	});


</script>




<div id = 'app'>
	<div id = 'row'>
		<h1 id= 'session_id'> {SESSION_ID} </h1>
		<button id="add_column"> Add Column </button>
		<button id="add_column"> Share Link </button>
	</div>

	<div id = 'main'>

		<div id="columns">
		{#each columns as column, index (column.id)}
		  <div class="column">
			<div class="col_title">
			  <input placeholder = 'New Column' class="title" bind:value={column.title}>
			  <input placeholder = 'Subtitle' class="subtitle" bind:value={column.subtitle}>
			</div>
			<textarea placeholder="Start typing..." class="input"></textarea>
		  </div>
		{/each}
	  </div>

	</div>

	<div id = 'footer'>
		<p> Created by <a href = 'https:/heewon.io'> Shelostoff </a> </p>
	</div>
</div>




<style lang="scss">


	#app{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#session_id{
		font-size: 16px;
		font-weight: 700;
		color: black;
		margin: 10px;
		background: white;
		padding: 12px 20px;
		border-radius: 50px;
	}

	button{
		font-size: 14px;
		font-weight: 500;
		color: white;
		margin: 10px;
		background:  #0074ff;
		padding: 12px 20px;
		border-radius: 50px;
		outline: none;
		border: none;
		cursor: pointer;
	}

	button:focus{
		background: #0141ca;
	}

	#row{
		display: flex;
		height: 60px;
	}

	#main{
		flex: 1;
		width: 100vw;
		overflow: scroll;
		border-radius: 10px;
		background: #f0f0f0;
	}

	#columns {
	  display: flex;
	  gap: 10px;
	  padding: 10px;
	  align-items: stretch;
	}

	.column {
	  width: 240px;
	  border-radius: 10px;
	  background: white;
	  padding: 10px;
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	  flex-shrink: 0;
	}

	.col_title {
		position: sticky;
		top: 0px;
		background: #f0f0f0;
		padding: 15px;
		border-radius: 10px;
	}

	input {
	  outline: none;
	  border: none;
	  width: 100%;
	}

	.title {
	  font-size: 16px;
	  font-weight: 600;
	  letter-spacing: -0.5px;
	  margin: 0;
	  margin-bottom: 5px;
	  background: none;
	}

	.subtitle {
	  font-size: 14px;
	  font-weight: 400;
	  letter-spacing: -0.5px;
	  opacity: 0.3;
	  margin: 0;
	}

	textarea {
	  outline: none;
	  border: none;
	  min-height: 200vh;
	  width: 95%;
	  margin: 15px 10px;
	  font-family: Arial, sans-serif;
	  font-weight: 500;
	  font-size: 14px;
	}
  </style>
