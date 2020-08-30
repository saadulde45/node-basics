module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        firstName : String,
        lastName : String,
        role: String,
        joiningDate: String,
        project: String,
        location : String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employee = mongoose.model("employee", schema);
    return Employee;
};