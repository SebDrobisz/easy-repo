async function fillGroupSelect() {
    data = (await fetchPAE()).pae;

    // const ueSelectElement = document.getElementById("ue-select");
    ues().forEach(ue => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", ue);
        optionElement.innerText = ue;
        ueSelectElement.append(optionElement);
    })

    // const groupSelectElement = document.getElementById("group-select");
    function fillGroupOptions(ue) {
        groupSelectElement.innerHTML = "";

        ueGroups(ue).forEach(group => {
            const optionElement = document.createElement("option");
            optionElement.setAttribute("value", group);
            optionElement.innerText = group;
            groupSelectElement.append(optionElement);
        });
    }
    //const checkboxGroup = document.getElementById("checkbox-group");
    checkboxGroup.addEventListener("change", () => {
        if (checkboxGroup.checked) {
            groupSelectElement.classList.remove("hidden");
            fillGroupOptions(ueSelectElement.value);
        } else {
            groupSelectElement.classList.add("hidden");
        }
    })

    ueSelectElement.addEventListener("change", () => {
        if (checkboxGroup.checked) {
            fillGroupOptions(ueSelectElement.value);
        }
    });
}
