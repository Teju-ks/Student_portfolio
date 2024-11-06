document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('editProfile');
    let isEditing = false;

    const editableFields = {
        studentName: 'text',
        bio: 'textarea',
        studentId: 'text',
        year: 'text',
        gpa: 'number',
        major: 'text'
    };

    editBtn.addEventListener('click', () => {
        if (!isEditing) {
            // Switch to edit mode
            for (const [id, type] of Object.entries(editableFields)) {
                const element = document.getElementById(id);
                const currentValue = element.textContent;
                
                if (type === 'textarea') {
                    const textarea = document.createElement('textarea');
                    textarea.value = currentValue;
                    textarea.id = id;
                    textarea.style.width = '100%';
                    textarea.style.minHeight = '100px';
                    element.replaceWith(textarea);
                } else {
                    const input = document.createElement('input');
                    input.type = type;
                    input.value = currentValue;
                    input.id = id;
                    element.replaceWith(input);
                }
            }
            editBtn.textContent = 'Save Profile';
        } else {
            // Save changes
            for (const id of Object.keys(editableFields)) {
                const input = document.getElementById(id);
                const span = document.createElement('span');
                span.id = id;
                span.textContent = input.value;
                input.replaceWith(span);
            }
            editBtn.textContent = 'Edit Profile';
        }
        isEditing = !isEditing;
    });

    // Add skill functionality
    const skillsContainer = document.getElementById('skills');
    const addSkill = (skillName) => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skillName;
        skillsContainer.appendChild(skillTag);
    };

    // Double click on skills container to add new skill
    skillsContainer.addEventListener('dblclick', () => {
        if (isEditing) {
            const skillName = prompt('Enter new skill:');
            if (skillName) {
                addSkill(skillName);
            }
        }
    });
});