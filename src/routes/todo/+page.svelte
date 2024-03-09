<script>
	let todos = $state([
		{ text: 'Sample item 1', done: true },
		{ text: 'Sample item 2', done: false }
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
		console.log(todosSaved);

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
		console.log(todos[index]);
		console.log(todos);
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
</script>

<div class="grid grid-cols-1 justify-items-center content-start gap-y-3">
	<div class="mt-5 mb-10"><h1>To-do list</h1></div>
	<div class="mb-5">
		<input
			onkeydown={addTodo}
			placeholder="Add something"
			type="text"
			id="add-new"
			class="input input-bordered input-primary w-72"
		/>
		<button on:click={addTodoButton} type="submit" class="btn btn-primary">+</button>
	</div>
	<div class="filters">
		<button
			class="btn btn-warning"
			id="filter-all"
			value="filter-all"
			onclick={() => {
				filter = 'all';
			}}>All</button
		>
		<button
			class="btn btn-accent"
			id="filter-completed"
			value="filter-completed"
			onclick={() => {
				filter = 'completed';
			}}>Completed</button
		>
		<button
			class="btn btn-info"
			id="filter-pending"
			value="filter-pending"
			onclick={() => {
				filter = 'pending';
			}}>Pending</button
		>
	</div>
	<div class="wrapper">
		{#each filteredTodos as item, i}
			<div class="todo mb-2">
				<input
					type="text"
					value={item.text}
					oninput={(e) => editTodo(i, e.target.value, item.done)}
					class="input input-bordered input-secondary w-96"
				/>
				<input
					type="checkbox"
					bind:checked={item.done}
					on:click={toggleTodo}
					data-index={i}
					class="checkbox checkbox-secondary checkbox-lg hover:outline-double hover:outline-red-300"
				/>
			</div>
		{/each}
	</div>
	<div>
		{outputRemaining()}
		<i
			>{#if todoCount > 1}tasks{:else}task{/if} remaining.</i
		>
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
