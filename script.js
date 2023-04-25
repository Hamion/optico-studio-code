var toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type": "controls_if"
    },
    {
      "kind": "block",
      "type": "controls_repeat_ext"
    },
    {
      "kind": "block",
      "type": "logic_compare"
    },
    {
      "kind": "block",
      "type": "math_number"
    },
    {
      "kind": "block",
      "type": "math_arithmetic"
    },
    {
      "kind": "block",
      "type": "text"
    },
    {
      "kind": "block",
      "type": "text_print"
    },
  ]
}
const componentStyle = {
	'workspaceBackgroundColour': 'var(--surface)',
	'toolboxBackgroundColour': 'var(--surfaceVariant)',
	'toolboxForegroundColour': 'var(--color)',
	'flyoutBackgroundColour': 'var(--surfaceVariant)',
	'flyoutOpacity': 1
}
const theme = Blockly.Theme.defineTheme('themeName', {
	'base': Blockly.Themes.Classic,
	'componentStyles': componentStyle,
});

const blocklyArea = document.getElementById('blocklyArea');
const blocklyDiv = document.getElementById('blocklyDiv');

const workspace = Blockly.inject(blocklyDiv, {
	renderer: 'Zelos',
	toolbox: toolbox,
	trashcan: true,
	zoom: {
		controls: true,
		wheel: true,
		startScale: 1.0,
		maxScale: 3,
		minScale: 0.3,
		scaleSpeed: 1.2,
		pinch: true
	},
	move: {
		scrollbars: {
			horizontal: true,
			vertical: true
		},
		drag: true,
		wheel: false,
	}
});

const onresize = function (e) {
	const element = blocklyArea;
	let x = 0;
	let y = 0;
	do {
		x += element.offsetLeft;
		y += element.offsetTop;
	} while (element) {
		blocklyDiv.style.left = x + 'px';
		blocklyDiv.style.top = y + 'px';
		blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
		blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
		Blockly.svgResize(workspace);
	}
};

window.addEventListener('resize', onresize, false);
onresize();