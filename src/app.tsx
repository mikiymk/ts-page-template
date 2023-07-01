import { Show, createSignal } from "solid-js";

import { add } from "@/lib/add";

import { neg } from "./app.css";

import type { JSXElement } from "solid-js";

export const App = (): JSXElement => {
	const [enable, setEnable] = createSignal(false);

	const onClick = () => {
		setEnable((previous) => !previous);
	};

	return (
		<div>
			<h1 class={neg}>Typescript Page Template</h1>

			<p>1 + 1 = {add(1, 1)}</p>

			<button onClick={onClick}> click me!</button>
			<output>
				<Show when={enable()} fallback={"not enabled!"}>
					enabled!
				</Show>
			</output>
		</div>
	);
};
