# Drafts Actions


## Send to DevonThink and OmniFocus

This action will send the entire draft to DevonThink using the first line as the title.  If the title starts with ‘# ‘ this will be removed for the DevonThink name.

Any open tasks in the draft will be sent to the OmniFocus Inbox.  The header structure of the draft will be used to structure the tasks in OmniFocus.

For example, given the draft below:
	# This is the title
	
	## This is the first section
	[ ] Task in first section
	
	### Subsection
	[ ] Task in subsection
	[ ] Another task in subsection
	
	## Second Section
	[ ] Task in second section

The OmniFocus task structure would look like:
![][image-1]

This requires three action steps:
1. A `Script` step containing the javascript code contained in `Send to DevonThink and Omnifocus.js`
2. A `URL` step containing `omnifocus:///paste?content=[[tasks]]`
3. A `URL` step containing `x-devonthink://createmarkdown?title=[[cleanedtitle]]&text=[[draft]]&tags=[[tags]]`

[image-1]:	OmniFocus%20Tasks.png