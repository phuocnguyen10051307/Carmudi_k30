const wrappers = document.querySelectorAll(".wrapper");

wrappers.forEach(wrapper => {
    const rangeInputs = wrapper.querySelectorAll(".range-input input"),
          yearInputs = wrapper.querySelectorAll(".year-input input"),
          progress = wrapper.querySelector(".slider .progress");

    let yearGap = 1; // Minimum gap is 1 year

    function updateProgress() {
        let minVal = parseInt(rangeInputs[0].value),
            maxVal = parseInt(rangeInputs[1].value);
        progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
        progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
    }

    yearInputs.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(yearInputs[0].value),
                maxVal = parseInt(yearInputs[1].value);

            if ((maxVal - minVal >= yearGap) && maxVal <= parseInt(yearInputs[1].max) && minVal >= parseInt(yearInputs[0].min)) {
                if (e.target.className === "input-min") {
                    rangeInputs[0].value = minVal;
                    progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                } else {
                    rangeInputs[1].value = maxVal;
                    progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                }
            }
        });
    });

    rangeInputs.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInputs[0].value),
                maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < yearGap) {
                if (e.target.className === "range-min") {
                    rangeInputs[0].value = maxVal - yearGap;
                } else {
                    rangeInputs[1].value = minVal + yearGap;
                }
            } else {
                yearInputs[0].value = minVal;
                yearInputs[1].value = maxVal;
                progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
            }
        });
    });

    updateProgress();
});
