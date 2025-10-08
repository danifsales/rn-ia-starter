import Constants from "expo-constants";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { ActivityIndicator, Button, Card, Provider as PaperProvider, SegmentedButtons, Text, TextInput } from "react-native-paper";

const BASE_URL = (Constants.expoConfig?.extra as any)?.BASE_URL || "http://localhost:3030";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"receitas"|"coach"|"motivacional"|"elogios">("receitas");

  const askAI = async () => {
    if (!input.trim()) return;
    try {
      setLoading(true);
      setAnswer("");
      const r = await fetch(`${BASE_URL}/api/ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input, mode })
      });
      const data = await r.json();
      setAnswer(data.text || "Sem resposta.");
    } catch {
      setAnswer("Erro ao consultar a IA. Verifique o backend/URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0B1220" }}>
        <View style={{ padding: 16, gap: 16, flex: 1 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>RN + IA</Text>

          <Card>
            <Card.Content>
              <SegmentedButtons
                value={mode}
                onValueChange={(v:any)=>setMode(v)}
                buttons={[
                  { value: "receitas", label: "Receitas" },
                  { value: "coach", label: "Coach" },
                  { value: "motivacional", label: "Motiv." },
                  { value: "elogios", label: "Elogios" }
                ]}
              />
              <TextInput
                style={{ marginTop: 12 }}
                label="Digite sua entrada (ingredientes, assunto, sentimento...)"
                value={input}
                onChangeText={setInput}
                mode="outlined"
                multiline
              />
              <Button style={{ marginTop: 12 }} mode="contained" onPress={askAI} disabled={loading}>
                {loading ? "Gerando…" : "Perguntar"}
              </Button>
            </Card.Content>
          </Card>

          <Card mode="outlined" style={{ flex: 1 }}>
            <Card.Title title="Resposta da IA" left={() => (loading ? <ActivityIndicator /> : null)} />
            <Card.Content><Text selectable>{answer}</Text></Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
