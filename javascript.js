<script>
    function populateSecondDropdown() {
        var selectedCadre = document.getElementById("first-dropdown").value;
        var secondDropdown = document.getElementById("second-dropdown");
        secondDropdown.innerHTML = ""; // Clear existing options

        if (selectedCadre === "Scientific") {
            addOption(secondDropdown, "Scientist A");
            addOption(secondDropdown, "Scientist B");
            addOption(secondDropdown, "Scientist C");
            addOption(secondDropdown, "Scientist D");
            addOption(secondDropdown, "Scientist E");
            addOption(secondDropdown, "Scientist F");
            addOption(secondDropdown, "Scientist G");
        } else if (selectedCadre === "Technical") {
            addOption(secondDropdown, "Technician");
            addOption(secondDropdown, "Sr. Technician");
            addOption(secondDropdown, "Technical Assistant");
            addOption(secondDropdown, "Technical Officer A");
            addOption(secondDropdown, "Technical Officer B");
            addOption(secondDropdown, "Technical Officer C");
            addOption(secondDropdown, "Sr. Technical Officer");
            addOption(secondDropdown, "Principal Technical Officer");
        } else if (selectedCadre === "Administrative") {
            addOption(secondDropdown, "Assistant");
            addOption(secondDropdown, "Assistant Section Officer");
            addOption(secondDropdown, "Section Officer");
            addOption(secondDropdown, "Administrative Officer");
            addOption(secondDropdown, "Senior Administrative Officer");
        } else if (selectedCadre === "Miscellaneous") {
            addOption(secondDropdown, "MTS");
            addOption(secondDropdown, "Drivers");
            addOption(secondDropdown, "Canteen Staff");
            addOption(secondDropdown, "House Keeping Staff");
        }
    }

    function addOption(selectElement, optionText) {
        var option = document.createElement("option");
        option.text = optionText;
        selectElement.add(option);
    }
</script>
