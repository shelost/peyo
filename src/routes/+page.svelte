<script>
	import { auth, googleProvider, db } from '../firebase';
	import authStore from './store/auth';
	import { signInWithPopup } from "firebase/auth";
	import { collection, doc, getDocs, setDoc, where, query, onSnapshot, addDoc, deleteDoc, getFirestore } from "firebase/firestore";
	import { onMount } from 'svelte';

	let user;
	let cookie;

	onMount(() => {
		authStore.subscribe(($v) => {
			user = $v

			setDoc(doc(db, "users", user.uid), {
				uid: user.uid,
				displayName: user.displayName,
				username: null,
				photoURL: user.photoURL,
				email: user.email,
				active: true,
				created: Date.now(),
				options: {
					primary: 'ffce00',
					secondary: '000000',
					font: 'Inter'
				}
			});

		});
	});


	const addProduct = async (userId) => {
		const reviewRef = doc(collection(db, "users", userId, "products"))
		await setDoc(reviewRef, {
			id: reviewRef.id, // Assign the autogenerated ID of the review document to the 'id' field
			uid: userId,
			slug: 'my-first-product',
			title: 'My First Product',
			type: 'doc',
			content: {
				body: 'Insert text here'
			},
			rating: 5.0
		})
	}

	export function decodeCookie(){
		let scrap =  decodeURIComponent(document.cookie).split(';')
		let list = scrap[2].split('&')

		let obj = {}

		for (let i=0; i<list.length; i++){
			//console.log(list)
			let split = list[i].split('=')
			let key = split[0]
			if (key[0] == ' '){
				key = key.substring(1)
			}
			let val = split[1]
			obj[key] = val
		}
		return obj
	}

    function login() {
       signInWithPopup(auth, googleProvider);
    }

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>


	{#if user}
		<h1> {user.name} </h1>
		<button on:click={ () => {auth.signOut(); location.reload() } }>Log Out</button>

	{:else}

		<img src='./assets/lassi-text.svg' alt="Welcome" />

		<button class = 'google' on:click={login}>
			Sign In with Google
		</button>
	{/if}


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	img{
		height: 100px;
		margin-bottom: 50px;
	}
</style>
