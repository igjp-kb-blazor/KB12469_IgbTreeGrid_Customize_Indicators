namespace KB12469_BlazorWasmApp.Data;

public class EmployeesNestedDataItem
{
    public double ID { get; set; }
    public double Age { get; set; }
    public double Salary { get; set; }
    public double Productivity { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
    public string? Phone { get; set; }
    public string? HireDate { get; set; }
    public string? Name { get; set; }
    public string? Title { get; set; }
    public List<EmployeesNestedDataItem_EmployeesItem>? Employees { get; set; }
}