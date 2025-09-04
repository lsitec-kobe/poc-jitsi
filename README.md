# 📱 PocJitsi

POC simples de integração do **Jitsi SDK** em um aplicativo **React Native**.  
O objetivo deste projeto é validar o uso do Jitsi para videoconferências dentro de um app mobile.

---

## 🚀 Tecnologias utilizadas
- [React Native](https://reactnative.dev/)
- [Jitsi Meet SDK](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-react-native-sdk)
---

## ⚙️ Pré-requisitos
Antes de rodar o projeto, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (>= 18.x)
- [Java JDK 17](https://adoptium.net/) (para build Android)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

---

## 🛠️ Problemas comuns

### 1. Erro de versão do Java
**Causa:** O projeto exige **Java 17** para compilar.  
**Solução:**  
- Instale o [JDK 17](https://adoptium.net/).  
- Configure a variável `JAVA_HOME` corretamente.  
- Verifique no terminal com:
```bash
java -version
```

### 2. Erros relacionados ao Gradle
```
Cannot get property 'gradlePluginVersion' on extra properties extension
```
**Causa:** A variável não está definida corretamente no gradle.properties ou build.gradle.  
**Solução:** 
- Certifique-se de definir gradlePluginVersion dentro do ext { } em build.gradle.
- Exemplo:
  ```
  ext {
    gradlePluginVersion = "8.4.2"
  }
  ```
---
## 🚫 Observação importante sobre Expo

### 
O Expo não é recomendado para este projeto, pois o Jitsi SDK depende de módulos nativos que não são compatíveis com o Expo Go.
Para rodar corretamente, utilize o React Native CLI.

---

## 📡 Criando e entrando em uma sala no Jitsi

1. Acesse https://meet.jit.si/
 no navegador.

2. Digite um nome de sala (exemplo: poc-jitsi-test) e clique em Start Meeting.

3. Copie o nome da sala.
   - O domínio já está configurado como https://meet.jit.si/.
   - Você só precisa informar o nome da sala no app.

4. Abra o aplicativo PocJitsi no celular.

5. Informe o nome da sala criada e entre na reunião.

> 🔎 **Dica:** Se você usar o mesmo nome de sala em vários dispositivos (ex: celular e navegador), todos entrarão na mesma chamada.
