export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#f5e9ff] via-[#e7d4ff] to-[#c38bff] flex items-center justify-center px-4 py-10">
			<section className="w-full max-w-6xl bg-white/90 backdrop-blur-xl shadow-2xl rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
				{/* Panel ilustración */}
				<aside className="relative block h-64 sm:h-80 lg:h-auto bg-gradient-to-br from-[#2e1149] via-[#4b1f72] to-[#8b1e84]">
					<img
						src="https://i.pinimg.com/736x/2f/3b/c2/2f3bc29b872651193596252eb704f870.jpg"
						alt="Astronauta ilustración"
						className="absolute inset-0 h-full w-full object-cover rounded-[32px]"
					/>
				</aside>

				{/* Panel formulario */}
				<section className="bg-white px-6 py-8 sm:px-10 sm:py-10 flex flex-col justify-center">
					<div className="w-full max-w-md mx-auto space-y-8">
						<header className="space-y-2">
							<div className="flex items-center justify-between text-sm text-slate-500">
								<span className="hidden sm:inline">¿Ya tienes cuenta?</span>
								<button className="font-medium text-purple-700 hover:text-purple-900">
									Inicia sesión
								</button>
							</div>
							<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
								Crear cuenta
							</h2>
						</header>

						{/* Botones sociales */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<button className="flex items-center justify-center gap-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium py-2.5 px-4 transition-colors">
								<span className="h-2 w-2 rounded-full bg-white" />
								<span>Continuar con Google</span>
							</button>
							<button className="flex items-center justify-center gap-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium py-2.5 px-4 transition-colors">
								<span className="h-2 w-2 rounded-full bg-[#1877f2]" />
								<span>Continuar con Facebook</span>
							</button>
						</div>

						<div className="flex items-center gap-3 text-xs text-slate-400">
							<div className="h-px flex-1 bg-slate-200" />
							<span>o con tu correo</span>
							<div className="h-px flex-1 bg-slate-200" />
						</div>

						{/* Formulario */}
						<form className="space-y-4">
							<div className="space-y-1">
								<label className="text-sm font-medium text-slate-700" htmlFor="name">
									Nombre completo
								</label>
								<input
									id="name"
									type="text"
									className="w-full h-11 rounded-full bg-slate-100 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-shadow"
									placeholder="Escribe tu nombre"
								/>
							</div>

							<div className="space-y-1">
								<label className="text-sm font-medium text-slate-700" htmlFor="email">
									Correo o teléfono
								</label>
								<input
									id="email"
									type="email"
									className="w-full h-11 rounded-full bg-slate-100 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-shadow"
									placeholder="Ingresa tu correo"
								/>
							</div>

							<div className="space-y-1">
								<label className="text-sm font-medium text-slate-700" htmlFor="username">
									Usuario
								</label>
								<input
									id="username"
									type="text"
									className="w-full h-11 rounded-full bg-slate-100 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-shadow"
									placeholder="Elige un nombre de usuario"
								/>
							</div>

							<div className="space-y-1">
								<label className="text-sm font-medium text-slate-700" htmlFor="password">
									Contraseña
								</label>
								<input
									id="password"
									type="password"
									className="w-full h-11 rounded-full bg-slate-100 px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-shadow"
									placeholder="Crea una contraseña segura"
								/>
							</div>

							<div className="flex items-center justify-between text-xs text-slate-500 pt-1">
								<label className="flex items-center gap-2 cursor-pointer select-none">
									<input
										type="checkbox"
										className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
									/>
									<span>
										Acepto los términos y la política de privacidad
									</span>
								</label>
							</div>

							<button
								type="submit"
								className="w-full mt-1 rounded-full bg-purple-800 hover:bg-purple-900 text-white font-medium text-sm py-3 transition-colors shadow-[0_14px_30px_rgba(88,28,135,0.5)]"
							>
								Registrarme
							</button>
						</form>

						<p className="text-xs text-center text-slate-500">
							¿Ya tienes una cuenta?{' '}
							<button className="font-medium text-purple-700 hover:text-purple-900">
								Inicia sesión
							</button>
						</p>
					</div>
				</section>
			</section>
		</main>
	);
}

