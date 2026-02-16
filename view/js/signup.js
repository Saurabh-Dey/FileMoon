const toast = new Notyf({
  position: { x: "right", y: "top" },
});
const signup = async (e) => {
  try {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;
    const payload = {
      fullname: elements.fullname.value,
      email: elements.email.value,
      password: elements.password.value,
      mobile: elements.mobile.value,
    };

    const {data} = await axios.post("http://localhost:8080/signup", payload);
    form.reset()
    toast.success(data.message);
    setTimeout(() => {
        location.href = "index.html"
    }, 2000);
  } catch (error) {
    toast.error(error.response ? error.response.data.message : error.message);
  }
};
