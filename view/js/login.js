const toast = new Notyf({
  position: { x: "right", y: "top" },
});

const login = async (e) => {
  try {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements
    const payload = {
        email: elements.email.value,
        password: elements.password.value
    };
    console.log(payload)
    const {data} = await axios.post("http://localhost:8080/login", payload);
    setTimeout(() => {
        location.href = "app/dashboard.html"
    }, 2000)
    toast.success(data.message)
  } catch (error) {
    toast.error(error.response ? error.response.data.message : error.message)
  }
};
