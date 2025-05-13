let classes = [];
var popup = document.getElementById("popup");
function openPopup() {
    popup.style.display = "block";
}


function closePopup()
{
    popup.style.display = "none";
}



window.onclick = function(event)
{
    if (event.target == popup)
    {
        popup.style.display = "none";
    }
}


function createClass()
{
    var classNameInput = document.getElementById("class-name-input");
    var className = classNameInput.value.trim();

    if (className)
{
        classes.push(className);
        updateClassList();
        classNameInput.value = "";
        closePopup();
    }
}


function updateClassList()
{
    var classList = document.getElementById("class-list");
    classList.innerHTML = "";

    classes.forEach((className, index) =>
{
        var listItem = document.createElement("li");
        listItem.textContent = className;
        listItem.onclick = function() {
            openClassView(index);
        };
        classList.appendChild(listItem);
    });
}


function openClassView(index) {
    var classContent = document.getElementById("class-content");
    classContent.innerHTML = `
        <h2>${classes[index]}</h2>
        <select id="month-select">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <!-- Add more months as needed -->
        </select>
        <table>
            <tr>
                <th>Student Name</th>
                <th>Student Code</th>
                <th>Attendance</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>12345</td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>67890</td>
                <td><input type="checkbox"></td>
            </tr>
            <!-- Add more rows as needed -->
        </table>
    `;
}
