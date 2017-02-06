var colors = {
  i3: {
    background: 'ffffff',
    titles: {
      focused: {
        border: '',
        background: '',
        text: '',
        indicator: '',
        child: ''
      },
      inactive: {
        border: '',
        background: '',
        text: '',
        indicator: '',
        child: ''
      },
      unfocused: {
        border: '',
        background: '',
        text: '',
        indicator: '',
        child: ''
      },
      urgent: {
        border: '',
        background: '',
        text: '',
        indicator: '',
        child: ''
      },
      placeholder: {
        border: '',
        background: '',
        text: '',
        indicator: '',
        child: ''
      },
    }
  },
  i3status: {
    background: '000000',
    statusline: 'ffffff',
    separator: '666666',
    workspace: {
      focused: {
        border: '',
        background: '',
        text: ''
      },
      active: {
        border: '',
        background: '',
        text: ''
      },
      inactive: {
        border: '',
        background: '',
        text: ''
      },
      urgent: {
        border: '',
        background: '',
        text: ''
      },
      binding: {
        border: '',
        background: '',
        text: ''
      },
    }
  },
  dmenu: {
    normal: {
      background: '222222',
      foreground: 'bbbbbb'
    },
    selected: {
      background: '005577',
      foreground: 'eeeeee'
    }
  }
};

var i3status = `
general {
  output_format = "i3bar"
  colors = true
  color_good = "#00FF00"
  color_degraded = "#FFFF00"
  color_bad = "#FF0000"
}
`;

var i3 = `
# class                 border  bground text    indicator child_border
client.focused          #4c7899 #285577 #ffffff #2e9ef4   #285577
client.focused_inactive #333333 #5f676a #ffffff #484e50   #5f676a
client.unfocused        #333333 #222222 #888888 #292d2e   #222222
client.urgent           #2f343a #900000 #ffffff #900000   #900000
client.placeholder      #000000 #0c0c0c #ffffff #000000   #0c0c0c

client.background       #ffffff

bar {
  colors {
    background #000000
    statusline #ffffff
    separator #666666

    focused_workspace  #4c7899 #285577 #ffffff
    active_workspace   #333333 #5f676a #ffffff
    inactive_workspace #333333 #222222 #888888
    urgent_workspace   #2f343a #900000 #ffffff
    binding_mode       #2f343a #900000 #ffffff
  }
}

bindsym $mod+d exec "dmenu_run -nf '#bbbbbb' -nb '#222222' -sb '#005577' -sf '#eeeeee' -fn 'monospace-10' -p 'dmenu prompt &gt;'"
`;
