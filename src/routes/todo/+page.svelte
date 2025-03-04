<script>
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import { newitem } from './todo_store';
	let todos = $state([
		{ text: 'Sample item 1', done: true },
		{ text: 'Sample item 2', done: false },
	]);

	////////////////////////////////////

	let filter = $state('all');
	let filteredTodos = $derived(filterTodos());

	function filterTodos() {
		switch (filter) {
			case 'all':
				return todos;
			case 'pending':
				return todos.filter((todo) => !todo.done);
			case 'completed':
				return todos.filter((todo) => todo.done);
		}
	}

	$effect(() => {
		let todosSaved = localStorage.getItem('todos');

		if (todosSaved) {
			todos = JSON.parse(todosSaved);
		}
	});

	$effect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	////////////////////////

	function addTodo(event) {
		if (event.key === 'Enter') {
			const todoEl = event.target;
			const text = todoEl.value;
			const done = false;
			todos = [...todos, { text, done }];
		}
	}

	function addTodoButton() {
		let text1 = document.getElementById('add-new');
		const done1 = false;
		todos.push({ text: text1.value, done: done1 });
		todos = [...todos];
	}

	function editTodo(index, text, done) {
		todos[index] = { text, done };
	}

	function toggleTodo(event) {
		let elToggle = event.target;
		let index = elToggle.dataset.index;
		todos[index].done = !todos[index].done;
	}

	let todoCount = $state();

	function outputRemaining() {
		todoCount = todos.filter((todo) => !todo.done).length;
		return todoCount;
	}

	let storeLearnButton;
	newitem.subscribe((value) => {
		console.log(value);
		storeLearnButton = value;
	});
</script>

<Breadcrumbs textCurrent={'To-Do List'} />
<div class="grid grid-cols-1 content-start justify-items-center gap-y-3">
	<div class="mb-10 text-center lg:mb-20">
		<h1
			class="inline-block bg-linear-to-r from-emerald-200 via-lime-200 to-teal-300 bg-clip-text py-3 text-transparent">
			To-Dos
		</h1>
		<div><i>Track what you gotta do.</i></div>
	</div>
	<div class="mb-5">
		<input
			onkeydown={addTodo}
			placeholder={storeLearnButton.length > 0 ? storeLearnButton : 'Add something'}
			type="text"
			value={storeLearnButton.length > 0 ? storeLearnButton : ''}
			id="add-new"
			class="input input-bordered input-primary w-72" />
		<button onclick={addTodoButton} type="submit" class="btn btn-primary">+</button>
	</div>
	<div class="filters">
		<button
			class="btn btn-warning"
			id="filter-all"
			value="filter-all"
			onclick={() => {
				filter = 'all';
			}}>All</button>
		<button
			class="btn btn-accent"
			id="filter-completed"
			value="filter-completed"
			onclick={() => {
				filter = 'completed';
			}}>Completed</button>
		<button
			class="btn btn-info"
			id="filter-pending"
			value="filter-pending"
			onclick={() => {
				filter = 'pending';
			}}>Pending</button>
	</div>
	<div class="wrapper">
		{#each filteredTodos as item, i}
			<div class="todo mb-2">
				<input
					type="text"
					value={item.text}
					oninput={(e) => editTodo(i, e.target.value, item.done)}
					class="input input-bordered input-secondary w-96" />
				<input
					type="checkbox"
					bind:checked={item.done}
					onclick={toggleTodo}
					data-index={i}
					class="checkbox-secondary checkbox checkbox-lg hover:outline-red-300 hover:outline-double" />
			</div>
		{/each}
	</div>
	<div>
		{outputRemaining()}
		<i
			>{#if todoCount > 1}tasks{:else}task{/if} remaining.</i>
	</div>
</div>

<style>
	.todo {
		position: relative;
	}

	.checkbox {
		position: absolute;
		right: 2%;
		top: 50%;
		translate: 0 -50%;
	}
</style>
