// See online documentation for examples
// https://docs.getdrafts.com/docs/actions/scripting

let tasks = '';
let cleaned_title = '';
let indent_level = 0;
let task_indentifier = '[ ]';


function createTaskpaper(line, index) {

	if (line.startsWith('# ')) {
		cleaned_title = line.replace('# ', '')
		tasks += cleaned_title + "\n"
		indent_level = 0
	}
	
	if (line.startsWith('## ')) {
		tasks += "\t" + line.replace('## ', '').trim() + "\n"
		indent_level = 1
	}
	
	if (line.startsWith('### ')) {
		tasks += "\t\t" + line.replace('### ', '').trim() + "\n"
		indent_level = 2
	}
	
	if (line.startsWith('#### ')) {
		tasks += "\t\t\t" + line.replace('#### ', '').trim() + "\n"
		indent_level = 3
	}
	
	if (line.startsWith('[ ]')) {
		tasks += "\t".repeat(indent_level + 1) + line.replace(task_indentifier, '').trim() + "\n";
	}
}

draft.content.split("\n").forEach(createTaskpaper);
draft.setTemplateTag("tasks", tasks.trim());
draft.setTemplateTag("cleanedtitle", cleaned_title);


// Two URL actions to follow script:
// 
// omnifocus:///paste?content=[[tasks]]
// x-devonthink://createmarkdown?title=[[cleanedtitle]]&text=[[draft]]&tags=[[tags]]