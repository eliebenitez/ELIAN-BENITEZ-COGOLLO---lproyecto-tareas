// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, career, password } = req.body;

  try {
    const newUser = new User({ username, career, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    // Maneja el error de forma más específica
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: 'El nombre de usuario ya está en uso' });
    }
    res.status(500).json({ message: 'Error al registrarse', error });
  }
});
