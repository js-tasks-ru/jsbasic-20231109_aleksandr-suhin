function highlight(table) {
  // ваш код...
  for (const tr of table.tBodies[0].rows) {

    let tdStatus = tr.lastElementChild;
    if (tdStatus.hasAttribute('data-available')) {
      tr.classList.add(tdStatus.dataset.available === "true" ? "available" : "unavailable");
    }
    else {
      tr.hidden = true;
    }
    
    if (tr.cells[2].textContent ==='m') tr.classList.add('male');
    if (tr.cells[2].textContent ==='f') tr.classList.add('female');

    if (Number.parseInt(tr.cells[1].textContent) < 18) tr.style='text-decoration: line-through';    
  }
}

