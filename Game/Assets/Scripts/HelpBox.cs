// https://discussions.unity.com/t/helpattribute-allows-you-to-use-helpbox-in-the-unity-inspector-window/659414/22
using UnityEngine;
using UnityEditor;

public enum HelpBoxMessageType { None, Info, Warning, Error }

public class HelpBoxAttribute : PropertyAttribute {

    public string Text;
    public HelpBoxMessageType MessageType;

    public HelpBoxAttribute(string text, HelpBoxMessageType messageType = HelpBoxMessageType.None) {
        this.Text = text;
        this.MessageType = messageType;
    }
}

[CustomPropertyDrawer(typeof(HelpBoxAttribute))]
public class HelpBoxAttributeDrawer : DecoratorDrawer {

    public override float GetHeight() {
        try {
            var helpBoxAttribute = attribute as HelpBoxAttribute;
            if (helpBoxAttribute == null) return base.GetHeight();
            var helpBoxStyle = (GUI.skin != null) ? GUI.skin.GetStyle("helpbox") : null;
            return helpBoxStyle == null ? base.GetHeight() : Mathf.Max(40f, helpBoxStyle.CalcHeight(new GUIContent(helpBoxAttribute.Text), EditorGUIUtility.currentViewWidth) + 4);
        }
        catch (System.ArgumentException) {
            return 3 * EditorGUIUtility.singleLineHeight; // Handle Unity 2022.2 bug by returning default value.
        }
    }

    public override void OnGUI(Rect position) {
        if (attribute is not HelpBoxAttribute helpBoxAttribute) return;
        EditorGUI.HelpBox(position, helpBoxAttribute.Text, GetMessageType(helpBoxAttribute.MessageType));
    }

    private static MessageType GetMessageType(HelpBoxMessageType helpBoxMessageType) {
        switch (helpBoxMessageType) {
            default:
            case HelpBoxMessageType.None: return MessageType.None;
            case HelpBoxMessageType.Info: return MessageType.Info;
            case HelpBoxMessageType.Warning: return MessageType.Warning;
            case HelpBoxMessageType.Error: return MessageType.Error;
        }
    }
}
